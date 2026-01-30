"use client"

import MDEditor from "@uiw/react-md-editor"
import React from "react"


const CoverLetterPreview = ({content}) => {
  return (
    <div className="py-4">
        <MDEditor
        value={content}
        preview="preview"
        height={700}
        style={{
                whiteSpace: "pre-wrap", 
                overflow: "hidden" // Prevents scrollbar mess
            }}
        />
    </div>
  )
}

export default CoverLetterPreview