import { TagType } from './tag';

export interface HomeItems {
  success: boolean;
  page: number;
  data: HomeItem[];
  tags: TagType[];
  has_more: boolean;
}

export interface ItemProps {
  item: HomeItem;
}

export interface HomeItem {
  item_id: string;
  author: string;
  author_avatar: string;
  title: string;
  name: string;
  description: string;
  primary_lang: string;
  lang_color: string;
  is_hot: boolean;
  clicks_total: number;
  comment_total: number;
  updated_at: string;
}

export interface Stats {
  repo_total: number;
  user_total: number;
}

export interface RecomemndItem {
  rid: string;
  name: string;
  full_name: string;
  author_avatar: string;
  description: string;
  primary_lang: string;
  lang_color: string;
  stars: number;
  stars_str: string;
}

export interface RecomemndItems {
  success: boolean;
  total: number;
  data: RecomemndItem[];
}

export interface AdvertItem {
  aid: string;
  url: string;
  image_url: string;
  position: string;
  rank: number;
  is_ad: boolean;
}

export interface AdvertItems {
  success: boolean;
  data: AdvertItem[];
}
