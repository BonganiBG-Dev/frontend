export interface TopPicks
{
    category: string,
    products: TopPickProducts[]
}

export interface TopPickProducts
{
    _id: string,
    Name: string,
    Price: string,
    Site_id: string,
    Img_url: string
}
