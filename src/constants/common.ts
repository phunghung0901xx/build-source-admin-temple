//Constants
export const FONT_SIZE = {
  xs: 8,
  '2xs': 10,
  sm: 12,
  '2sm': 13,
  md: 14,
  '2md': 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 36,
}

export const FONT_WEIGHT = {
  sm: 200,
  md: 400,
  lg: 500,
  xl: 600,
  '2xl': 700,
}

//Enumes
export enum PATH {
  TERM_AND_CONDITION = '/term-and-condition',
  TERM_AND_CONDITION_DETAIL = ':code',

  INSTRUCTIONS = '/instructions',
  INSTRUCTIONS_DETAIL = ':code',

  MINE_CHARGE_GUIDE = '/mine-charge-guide',
  MINE_CHARGE_GUIDE_DETAIL = ':code',

  DATA_POLICY = '/data-policy',
  DATA_POLICY_DETAIL = ':code',

  DASHBOARD = '/dashboard',
  /* User path */
  USER = '/user',
  USER_LIST = 'user-list',
  DETAIL_USER = 'detail/:id',
  SEND_MAIL = 'send-mail',
  INQUIRY_MANAGEMENT = 'inquiry-list',

  ARTIST = '/artist',
  ARTIST_LIST = 'artist-list',
  DETAIL_ARTIST = 'detail/:id',
  REGISTER_ARTIST = 'register-artist',
  EDIT_ARTIST = 'edit-artist/:id',

  /* Content path */
  CONTENT = '/content',
  CONTENT_LIST = 'content-list',
  REGISTER_CONTENT = 'register-content',
  DETAIL_CONTENT = 'detail/:type/:id',

  /* Community path */

  BANNER = '/banner',
  TOOLKIT = '/toolkit',
  COUPON = '/coupon',
  LOGIN = '/login',

  VOD = 'vod',
  VOD_LIST = 'vod-list',
  REGISTER_VOD = 'register-vod',
  EDIT_VOD = 'edit-vod/:id',
  VOD_DETAIL = ':id',

  PHOTO = 'photo',
  PHOTO_LIST = 'photo-list',
  REGISTER_PHOTO = 'register-photo',
  EDIT_PHOTO = 'edit-photo/:id',
  PHOTO_DETAIL = ':id',

  EVENT = 'event',
  EVENT_LIST = 'event-list',
  REGISTER_EVENT = 'register-event',
  EDIT_EVENT = 'edit-event/:id',
  EVENT_DETAIL = ':id',

  NOTICE = 'notice',
  REGISTER_NOTICE = 'register-notice',
  NOTICE_DETAIL = ':id',

  PAYMENT = '/payment',
  MINE_CHARGE = 'mine-charge',
  CONTENT_PAYMENT = 'content-payment',
  SUPER_CHEER = 'super-cheer',
  TOTAL_SALE = 'total-sales',

  SETTLEMENT = '/settlement',
  ARTIST_SETTLEMENT = 'artist-settlement',
  ARTIST_SETTLEMENT_DETAIL = ':id',

  NEW = 'news',
  FAQ = 'faq',
  REGISTER_FAQ = 'register-faq',
  EDIT_FAQ = 'edit-faq/:id',
  FAQ_DETAIL = ':id',
  
  CODE_MANAGEMENT = '/code-management'
}

export enum GENDER {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum CASE_TYPE {
  Schumpeter = 'Schumpeter',
  OTHER = 'other',
}

export enum CATE_TYPE {
  Content = 'CONTENT',
  Event = 'EVENT',
  Talent = 'TALENT',
}

export enum CONTENT_TYPE {
  Vod = 'VOD',
  Photo = 'PHOTO',
  Event = 'EVENT',
}

export const typeList = [
  { label: 'VOD', value: 'VOD' },
  { label: '포토', value: 'PHOTO' },
  { label: '이벤트', value: 'EVENT' },
]

export const typeListEvent = [
  { label: 'VOD', value: 'VOD' },
  { label: '포토', value: 'PHOTO' },
]

export enum LANGUAGE {
  kr = '한국어',
  en = '영어',
  cn = '중국어',
}

export const UPLOAD_IMAGE_LIMIT = 20
