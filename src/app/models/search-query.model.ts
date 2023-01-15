export interface SearchQuery
{
    limit?: number,
    page?: number,
    q?: string,
    c?: string,
    sort?: {
        field: string,
        order: number
    }
}
