import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

export const Markdown: FC<{ text: string }> = ({ text }) => {
    return <ReactMarkdown>
    {text}
  </ReactMarkdown>
}