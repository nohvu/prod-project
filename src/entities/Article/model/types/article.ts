export enum ArticleBlockType {
    TEXT='TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE'
}
export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType
}
export interface IArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE,
    code: string
}
export interface IArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT,
    title?: string,
    paragraphs: string[]
}
export interface IArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE,
    src: string,
    title: string
}
export type ArticleBlock = IArticleTextBlock | IArticleCodeBlock | IArticleImageBlock;

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMIC = 'ECONOMIC'
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[]
}
