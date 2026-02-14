import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})

interface IEnvironmentConfig {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT: number;
    DATABASE_URL: string;
}

class EnvironmentConfig implements IEnvironmentConfig {
    public readonly NODE_ENV: 'development' | 'production' | 'test';
    public readonly PORT: number;
    public readonly DATABASE_URL: string;

    constructor() {
        this.NODE_ENV = (process.env.NODE_ENV as any) || 'development';
        this.PORT = this.getNumber('PORT', 4000);
        this.DATABASE_URL = this.getRequired('DATABASE_URL');
        this.validate();
    }

    private getRequired(key: string): string {
        const value = process.env[key];
        if (!value) {
            throw new Error(`Missing required environment variable: ${key}`)
        }

        return value;
    }

    private getNumber(key: string, defaultValue: number): number {
        
        const value = process.env[key];

        if (!value) {
            return defaultValue;
        }

        const parsed = Number(value);
        if (isNaN(parsed)) {
            throw new Error(`${key} must be a valid number`);
        }

        return parsed;
    }

    private validate() {
        if (this.PORT < 1 || this.PORT > 65535) {
            throw new Error(`Invalid port: ${this.PORT}`);
        }
      
        if (!['development', 'production', 'test'].includes(this.NODE_ENV)) {
            throw new Error(`Invalid NODE_ENV: ${this.NODE_ENV}`);
        }
    }

    public isProduction(): boolean {
        return this.NODE_ENV === 'production';
    }

}

export const config = new EnvironmentConfig();