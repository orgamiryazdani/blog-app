"use client"

import { createComment } from "@/lib/actions"
import Button from "@/ui/Button"
import Spinner from "@/ui/Spinner"
import TextArea from "@/ui/TextArea"
import { useState } from "react"
import { useFormState } from "react-hook-form"

function CommentForm({ postId, parentId }) {
    const [text, setText] = useState("")
    const { pending } = useFormState()

    return (
        <div>
            <div className="flex justify-center mt-4">
                <div className="max-w-md  w-full">
                    <form
                        className="space-y-7"
                        action={createComment.bind(null, postId, parentId)}
                    >
                        <TextArea
                            name="text"
                            label="متن نظر"
                            value={text}
                            isRequired
                            onChange={(e) => setText(e.target.value)}
                        />
                        {pending ? <Spinner /> : <Button>تایید</Button>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CommentForm