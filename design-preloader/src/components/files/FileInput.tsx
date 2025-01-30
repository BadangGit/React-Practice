import React, { useState } from "react";

export default function Filedrop() {
    type InputFile = { tsx_file: File; preview_text: string };
    const [file, setFile] = useState<InputFile | null>(null);

    const previewFile = (e: any) => {
        const inputFile: File = e.currentTarget.files[0];

        if (inputFile) {
            const reader = new FileReader();

            reader.onload = (e: any) => {
                setFile({
                    tsx_file: inputFile,
                    preview_text: e.target.result,
                });
            };

            reader.readAsText(inputFile);
        }
    };

    return (
        <>
            <input type="file" onChange={previewFile} accept=".tsx" />

            <div> {file?.preview_text} </div>
        </>
    );
}
