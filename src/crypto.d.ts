declare var AES: {
    encrypt: (message: string, key: string, cfg: any) => string;
    decrypt: (ciphertext: string, key: string, cfg: any) => string;
}
