import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { calculatePagesCount } from '~/utlis/calculate'
import { convertSearchParams } from '~/utlis/export-flie'

type QueryFilterProps = {
  key: string
  queryFn: Function
  limit?: number
  defaultParams?: any
}

export function useQueryFilter({ key, queryFn, limit, defaultParams }: QueryFilterProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [initParams, setInitParams] = useState<any>(null)
  const [selected, setSelected] = useState<Array<any>>([])
  const [filterValue, setFilterValue] = useState<any>({})

  const { isFetching, data, refetch } = useQuery({
    queryKey: [key, filterValue],
    queryFn: () => queryFn({ ...filterValue, ...defaultParams, page: filterValue.page || 1, limit: limit || 10 }),
    refetchOnWindowFocus: false,
    retry: false,
    keepPreviousData: true,
    initialData: [],
  })
  useEffect(() => {
    const filterData = convertSearchParams(searchParams)
    setFilterValue(filterData)
  }, [searchParams])

  useEffect(() => {
    const filterData = convertSearchParams(searchParams)
    setInitParams(filterData)
  }, [])

  const setPage = (page: string) => {
    let updatedSearchParams = new URLSearchParams(searchParams.toString())
    updatedSearchParams.set('page', page)
    setSearchParams(updatedSearchParams.toString())
    setSelected([])
  }

  const setParams = (searchParams: any) => {
    setSearchParams(searchParams)
    setSelected([])
  }
  const { result, metaData, ...restData } = data?.data || {}
  const { pageSize, totalRecords } = metaData || {}

  const pagesCount = useMemo(() => calculatePagesCount(pageSize || limit || 10, totalRecords || 0), [totalRecords])
  const totalItem = useMemo(() => totalRecords, [totalRecords])

  return {
    initParams,
    isFetching,
    data,
    refetch,
    setParams,
    setPage,
    currentPage: Number(searchParams.get('page')) || 1,
    pagesCount,
    totalItem,
    result,
    searchParams,
    setSelected,
    selected,
    restData,
  }
}
