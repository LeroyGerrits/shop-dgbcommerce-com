export abstract class Constants {
    static readonly DATE_FORMAT: string = 'dd-MM-yyyy';
    static readonly DATE_TIME_FORMAT: string = 'dd-MM-yyyy HH:mm';
    static readonly DIGIBYTE_WALLET_ADDRESS_GENERAL: string = 'dgb1qvkxgpells5z2yeazs0hq6spks362urnj3fs86k';
    static readonly DIGIBYTE_WALLET_ADDRESS_TRANSACTIONS: string = 'dgb1qzxu0rapyvjz9wws8cdyqj6t7t5lne0lgnm4w5w';
    static readonly EMPTY_GUID: string = '00000000-0000-0000-0000-000000000000';
    static readonly ENABLE_REGISTRATIONS: boolean = true;
    static readonly MESSAGE_NO_RECORDS_FOUND = 'No records found matching your search criteria.';
    static readonly QR_CODE_COLOR_DARK: string = '#ffffff';
    static readonly QR_CODE_COLOR_LIGHT: string = '#202020';
    static readonly QR_CODE_LOGO: string = 'assets/images/QrCodeLogo.png';
    static readonly QR_CODE_LOGO_SIZE: number = 50;
    static readonly QR_CODE_SIZE: number = 220;
    static readonly RESERVED_SUBDOMAINS: string[] = ['admin', 'api', 'cdn', 'cms', 'imap', 'mail', 'pop', 'shop', 'smtp', 'upload', 'www'];
    static readonly REGEX_PATTERN_DECIMAL_2 = /^-?\d*[.,]?\d{0,2}$/;
    static readonly REGEX_PATTERN_DECIMAL_8 = /^-?\d*[.,]?\d{0,8}$/;
    static readonly REGEX_PATTERN_NUMBER = /^-?\d*$/;
    static readonly TITLE_PREFIX: string = 'DGB Commerce';
    static readonly UPLOAD_MAXIMUM_FILE_SIZE: number = 1024 * 1024 * 2; // 2MB
    static readonly UPLOAD_ALLOWED_EXTENSIONS: string[] = ['bmp', 'gif', 'jpg', 'jpeg', 'png'];
}