
export const confHeader = (token: string) => {
  return { headers: { Authorization: `${token}` } }
}
