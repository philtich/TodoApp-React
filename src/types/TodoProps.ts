export type TodoProps = 
{
    data: [
        {
        id: number,
        attributes: {
        title: string,
        done: boolean,
        createdAt: Date,
        updatedAt: Date,
        publishedAt: Date
        }
        }
    ]

    meta: {
        pagination: {
          page: number,
          pageSize: number,
          pageCount: number,
          total: number
        }
    } 
}
