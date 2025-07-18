import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: any[]) {
    return twMerge(clsx(...inputs));
}

export const setPageTitle = (pageTitle: string) => {
    document.title = `${pageTitle} | DataDaur`;
};
