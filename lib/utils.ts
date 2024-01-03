export const generatePages = (totalItems: number, limit: number, currentPage: number) => {
    const pages: string[] = [];
    const numberOfPages = Math.ceil(totalItems/limit);
    if (numberOfPages <= 5) {
        for (let i = 1; i <= numberOfPages; i++) {
            pages.push(`${i}`)
        }
        return pages;
    }
    if(numberOfPages === 6) {
        let ignore: number;
        if((numberOfPages - currentPage) > (currentPage - 1)) {
            ignore = currentPage + 1
        } else {
            ignore = currentPage - 1
        }
        for (let i = 1; i <= numberOfPages; i++) {
            if(i !== ignore) { 
                pages.push(`${i}`)
            } else {
                pages.push(`...`);
            }
        }
        return pages;
    } else {
        if(currentPage <= 3) {
            return ["1", "2", "3", "...", `${numberOfPages}`]
        } else if (currentPage >= numberOfPages - 2) {
            return ["1", "...", `${numberOfPages - 2}`, `${numberOfPages - 1}`, `${numberOfPages}`]
        } else {
            return ["1", "...", `${currentPage}`, `...`, `${numberOfPages}`]
        }
    }
}
export const formatLink = (link: string) => {
    return link ? (link.match(/^(http(s)?:\/\/)/) ? link : "https://" + link) : link;
}
export const getAvailableHandle = (handles: any) => {
    return handles.twitter || handles.discord || handles.telegram || handles.reddit || handles.tiktok || handles.youtube || handles.instagram || handles.thread || "No social handle"
}
