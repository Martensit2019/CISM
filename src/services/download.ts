export const createTxtFile = (description: string, fileName: string) => {
  const blob = new Blob([description], { type: 'text/plain' })
  const fileUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.download = fileName
  link.href = fileUrl
  link.click()
}