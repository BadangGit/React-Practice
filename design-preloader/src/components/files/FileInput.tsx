import React, { useState } from "react";

export default function Filedrop() {
    type InputFile = { tsx_file: File; preview_text: string };

    const [file, setFile] = useState<InputFile>();

    const previewFile = (e: any) => {
        const inputFile: File = e.currentTarget.files[0];

        if (inputFile) {
            const reader = new FileReader();

            reader.readAsText(inputFile);

            reader.onload = (e: ProgressEvent<FileReader>) => {
                setFile({
                    tsx_file: inputFile,
                    preview_text: e.target ? (e.target.result as string) : "",
                });

                if (e.target?.result) {
                    addLineBreak(e.target.result as string);
                }
            };
        }
    };

    const addLineBreak = function (text: string) {
        console.log(text);
    };

    return (
        <>
            <input type="file" onChange={previewFile} accept=".tsx" />

            <div> {file?.preview_text} </div>
        </>
    );
}
