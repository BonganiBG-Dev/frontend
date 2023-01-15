export interface Product
{
    _id: string,
    Name: string,
    Category_id: string,
    Site_id: string,
    Img_url: string,
    Page_link: string,
    Series_id: string,
    Price: number,
    Last_updated: Date,
    Price_history: PriceHistory
}

export interface PriceHistory{
    Price: number,
    Updated_on: Date
}
