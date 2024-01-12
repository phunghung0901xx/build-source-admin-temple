import api from './axios'

const ENDPOINT = '/api/uploads'

export async function upload(body: FormData) {
  const { data } = await api.post(ENDPOINT, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return data
}

export async function uploadMultiple(body: FormData) {
  const { data } = await api.post(`${ENDPOINT}/multiple`, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return data
}

export async function deleteUpload(id: number) {
  const { data } = await api.delete(`${ENDPOINT}/${id}`)
  return data
}
