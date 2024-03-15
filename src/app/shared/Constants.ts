export abstract class Constants {
    static readonly API_URL: string = 'https://api.dgbcommerce.com';
    static readonly CURRENCY_SYMBOL: string = 'Ɗ';
    static readonly DATE_FORMAT: string = 'dd-MM-yyyy';
    static readonly DATE_TIME_FORMAT: string = 'dd-MM-yyyy HH:mm';
    static readonly DGB_COMMERCE_DOMAIN: string = 'dgbcommerce.com';
    static readonly DGB_COMMERCE_URL: string = 'https://www.dgbcommerce.com';    
    static readonly EMPTY_GUID: string = '00000000-0000-0000-0000-000000000000';
    static readonly PAGE_CATEGORY_ID_FOOTER = 'eb4c6cc2-c86b-4972-8dca-d2f17a58a728';
    static readonly PAGE_CATEGORY_ID_HEADER = '6518e92b-cf52-4c31-9f4d-83d3473ae55f';
    static readonly PAGE_CATEGORY_ID_TOP_BAR = 'd1ee4995-2426-41a9-929c-2b8711a57141';
    static readonly QR_CODE_COLOR_DARK: string = '#ffffff';
    static readonly QR_CODE_COLOR_LIGHT: string = '#202020';
    static readonly QR_CODE_LOGO: string = 'assets/images/QrCodeLogo.png';
    static readonly QR_CODE_LOGO_SIZE: number = 50;
    static readonly QR_CODE_SIZE: number = 220;
    static readonly REGEX_PATTERN_DECIMAL_2 = /^-?\d*[.,]?\d{0,2}$/;
    static readonly REGEX_PATTERN_DECIMAL_8 = /^-?\d*[.,]?\d{0,8}$/;
    static readonly REGEX_PATTERN_NUMBER = /^-?\d*$/;
    static readonly TITLE_PREFIX: string = 'DGB Commerce';
}