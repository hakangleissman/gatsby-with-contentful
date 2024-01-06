import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import * as React from "react"
export const richTextConfig = {
    renderMark: {
        [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
        [INLINES.HYPERLINK]: (node, children) => {
            const { uri } = node.data
            return (
                <a href={uri} className="underline">
                    {children}
                </a>
            )
        },
        [BLOCKS.HEADING_2]: (node, children) => {
            return <div><h3>{children}</h3></div>
        },
    },
};
