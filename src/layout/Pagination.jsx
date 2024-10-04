import {useState} from 'react';
import {PaginationItem} from "@/components";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {

    const items = 5;

    const [actionItem, setActionItem] = useState(1);

    return (
        <div className={'flex gap-3 items-center justify-center'}>
            <PaginationItem>
                <ChevronLeft/>
            </PaginationItem>
            {Array.from({ length: items }).map((_, i) =>
                <PaginationItem isActive={i === actionItem} key={i} onClick={() => setActionItem(i)}>
                    <span>{i}</span>
                </PaginationItem>
            )}
            <PaginationItem>
                <ChevronRight/>
            </PaginationItem>
        </div>
    );
};

export default Pagination;
