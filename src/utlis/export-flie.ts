import Token from '~/services/token.service'

export const exportExcelUtils = async (url: any, filename: string) => {
  const token: any = Token.getLocalAccessToken()
  fetch(url, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
      responseType: 'blob',
    },
  })
    .then((response) => {
      return response.blob()
    })
    .then((blob) => {
      const url = URL.createObjectURL(blob)
      const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
      const outputFilename = `${filename}-` + utc + `.xlsx`
      const link = document.createElement('a')

      link.href = url
      link.setAttribute('download', outputFilename)
      document.body.appendChild(link)
      link.click()
    })
}

export const convertSearchParams = (searchParams: URLSearchParams) => {
  const params = {}
  for (const [key, entry] of searchParams.entries()) {
    Object.assign(params, {
      [key]: entry,
    })
  }

  return params
}
