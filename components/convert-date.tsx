import { parseISO, format } from 'date-fns'
import  ja from 'date-fns/locale/ja'

export default function ConvertDeta({ dateIOS }) {
    return (
        <time dateTime={dateIOS}>
            {format(parseIOS(dateIOS), 'yyy年MM月dd日',{
                locale: ja,
            })}
        </time>
    )
}