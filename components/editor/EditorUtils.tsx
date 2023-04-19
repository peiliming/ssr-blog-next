import { Editor } from '@tiptap/react'

export const getFocusedEditor = (editor: Editor) => {
  return editor.chain().focus()
}

export const validateUrl = (url: string) => {
  let finalUrl

  try {
    finalUrl = new URL(url)
  } catch (error) {
    finalUrl = new URL('https://' + url)
  }

  return finalUrl.origin
}