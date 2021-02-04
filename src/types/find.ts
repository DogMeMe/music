export interface IBanner {
  pic: string;
  titleColor: string;
  url: string;
  typeTitle: string;
  targetId: string;
}
export interface IBannerResponse {
  banners: IBanner[];
  code: number;
}

export enum EBlockCode {
  HOMEPAGE_BANNER = "HOMEPAGE_BANNER",
  HOMEPAGE_BLOCK_PLAYLIST_RCMD = "HOMEPAGE_BLOCK_PLAYLIST_RCMD",
  HOMEPAGE_BLOCK_STYLE_RCMD = "HOMEPAGE_BLOCK_STYLE_RCMD",
  HOMEPAGE_MUSIC_MLOG = "HOMEPAGE_MUSIC_MLOG",
  HOMEPAGE_MUSIC_CALENDAR = "HOMEPAGE_MUSIC_CALENDAR",
  HOMEPAGE_BLOCK_OFFICIAL_PLAYLIST = "HOMEPAGE_BLOCK_OFFICIAL_PLAYLIST",
  HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG = "HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG",
  HOMEPAGE_PODCAST24 = "HOMEPAGE_PODCAST24",
  HOMEPAGE_VOICELIST_RCMD = "HOMEPAGE_VOICELIST_RCMD",
  HOMEPAGE_BLOCK_VIDEO_PLAYLIST = "HOMEPAGE_BLOCK_VIDEO_PLAYLIST",
}

export interface IBlock {
  blockCode: EBlockCode;
  canClose: boolean;
  extInfo?: any;
  showType: string;
  uiElement: {
    button: {
      text: string;
      action: string;
    };
    mainTitle: {
      title: string;
    };
    subTitle: {
      title: string;
    };
  };
  creatives: [];
}

export interface IBlockResponse {
  code: number;
  message: string,
  data: IBlockWrapper
}

export interface IBlockWrapper {
  blocks: IBlock[];
  guideToast: {
    hasGuideToast: boolean;
    toastList: [];
  };
  hasMore: boolean;
  pageConfig: {};
}

export interface IPlay {
  id: string;
  picUrl: string;
  name: string;
}
