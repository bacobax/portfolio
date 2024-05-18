import {HighLightedText} from "../types";

interface HighlightTextProps extends React.HTMLAttributes<HTMLDivElement> {
    highlightedText: HighLightedText;
}

const HighlightText: React.FC<HighlightTextProps> = ({highlightedText, ...props}) => {
    const {text, keyWord} = highlightedText;
    const index = text.indexOf(keyWord);
    const before = text.slice(0, index);
    const after = text.slice(index + keyWord.length);
    return (
        <h1 {...props}>
            {before}
            <span className={"text-goldenGlow"}>{keyWord}</span>
            {after}
        </h1>
    );
}

export default HighlightText;