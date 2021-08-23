export interface ListResponse<T> {
  next_cursor: string
  items: T[]
}
