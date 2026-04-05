import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type BoardModel = runtime.Types.Result.DefaultSelection<Prisma.$BoardPayload>;
export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null;
    _min: BoardMinAggregateOutputType | null;
    _max: BoardMaxAggregateOutputType | null;
};
export type BoardMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    createdAt: Date | null;
};
export type BoardMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    createdAt: Date | null;
};
export type BoardCountAggregateOutputType = {
    id: number;
    title: number;
    createdAt: number;
    _all: number;
};
export type BoardMinAggregateInputType = {
    id?: true;
    title?: true;
    createdAt?: true;
};
export type BoardMaxAggregateInputType = {
    id?: true;
    title?: true;
    createdAt?: true;
};
export type BoardCountAggregateInputType = {
    id?: true;
    title?: true;
    createdAt?: true;
    _all?: true;
};
export type BoardAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardWhereInput;
    orderBy?: Prisma.BoardOrderByWithRelationInput | Prisma.BoardOrderByWithRelationInput[];
    cursor?: Prisma.BoardWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BoardCountAggregateInputType;
    _min?: BoardMinAggregateInputType;
    _max?: BoardMaxAggregateInputType;
};
export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
    [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBoard[P]> : Prisma.GetScalarType<T[P], AggregateBoard[P]>;
};
export type BoardGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardWhereInput;
    orderBy?: Prisma.BoardOrderByWithAggregationInput | Prisma.BoardOrderByWithAggregationInput[];
    by: Prisma.BoardScalarFieldEnum[] | Prisma.BoardScalarFieldEnum;
    having?: Prisma.BoardScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BoardCountAggregateInputType | true;
    _min?: BoardMinAggregateInputType;
    _max?: BoardMaxAggregateInputType;
};
export type BoardGroupByOutputType = {
    id: string;
    title: string;
    createdAt: Date;
    _count: BoardCountAggregateOutputType | null;
    _min: BoardMinAggregateOutputType | null;
    _max: BoardMaxAggregateOutputType | null;
};
type GetBoardGroupByPayload<T extends BoardGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BoardGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BoardGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BoardGroupByOutputType[P]>;
}>>;
export type BoardWhereInput = {
    AND?: Prisma.BoardWhereInput | Prisma.BoardWhereInput[];
    OR?: Prisma.BoardWhereInput[];
    NOT?: Prisma.BoardWhereInput | Prisma.BoardWhereInput[];
    id?: Prisma.StringFilter<"Board"> | string;
    title?: Prisma.StringFilter<"Board"> | string;
    createdAt?: Prisma.DateTimeFilter<"Board"> | Date | string;
    columns?: Prisma.ColumnListRelationFilter;
};
export type BoardOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    columns?: Prisma.ColumnOrderByRelationAggregateInput;
};
export type BoardWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BoardWhereInput | Prisma.BoardWhereInput[];
    OR?: Prisma.BoardWhereInput[];
    NOT?: Prisma.BoardWhereInput | Prisma.BoardWhereInput[];
    title?: Prisma.StringFilter<"Board"> | string;
    createdAt?: Prisma.DateTimeFilter<"Board"> | Date | string;
    columns?: Prisma.ColumnListRelationFilter;
}, "id">;
export type BoardOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BoardCountOrderByAggregateInput;
    _max?: Prisma.BoardMaxOrderByAggregateInput;
    _min?: Prisma.BoardMinOrderByAggregateInput;
};
export type BoardScalarWhereWithAggregatesInput = {
    AND?: Prisma.BoardScalarWhereWithAggregatesInput | Prisma.BoardScalarWhereWithAggregatesInput[];
    OR?: Prisma.BoardScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BoardScalarWhereWithAggregatesInput | Prisma.BoardScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Board"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Board"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Board"> | Date | string;
};
export type BoardCreateInput = {
    id?: string;
    title: string;
    createdAt?: Date | string;
    columns?: Prisma.ColumnCreateNestedManyWithoutBoardInput;
};
export type BoardUncheckedCreateInput = {
    id?: string;
    title: string;
    createdAt?: Date | string;
    columns?: Prisma.ColumnUncheckedCreateNestedManyWithoutBoardInput;
};
export type BoardUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    columns?: Prisma.ColumnUpdateManyWithoutBoardNestedInput;
};
export type BoardUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    columns?: Prisma.ColumnUncheckedUpdateManyWithoutBoardNestedInput;
};
export type BoardCreateManyInput = {
    id?: string;
    title: string;
    createdAt?: Date | string;
};
export type BoardUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BoardMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BoardMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BoardScalarRelationFilter = {
    is?: Prisma.BoardWhereInput;
    isNot?: Prisma.BoardWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type BoardCreateNestedOneWithoutColumnsInput = {
    create?: Prisma.XOR<Prisma.BoardCreateWithoutColumnsInput, Prisma.BoardUncheckedCreateWithoutColumnsInput>;
    connectOrCreate?: Prisma.BoardCreateOrConnectWithoutColumnsInput;
    connect?: Prisma.BoardWhereUniqueInput;
};
export type BoardUpdateOneRequiredWithoutColumnsNestedInput = {
    create?: Prisma.XOR<Prisma.BoardCreateWithoutColumnsInput, Prisma.BoardUncheckedCreateWithoutColumnsInput>;
    connectOrCreate?: Prisma.BoardCreateOrConnectWithoutColumnsInput;
    upsert?: Prisma.BoardUpsertWithoutColumnsInput;
    connect?: Prisma.BoardWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BoardUpdateToOneWithWhereWithoutColumnsInput, Prisma.BoardUpdateWithoutColumnsInput>, Prisma.BoardUncheckedUpdateWithoutColumnsInput>;
};
export type BoardCreateWithoutColumnsInput = {
    id?: string;
    title: string;
    createdAt?: Date | string;
};
export type BoardUncheckedCreateWithoutColumnsInput = {
    id?: string;
    title: string;
    createdAt?: Date | string;
};
export type BoardCreateOrConnectWithoutColumnsInput = {
    where: Prisma.BoardWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardCreateWithoutColumnsInput, Prisma.BoardUncheckedCreateWithoutColumnsInput>;
};
export type BoardUpsertWithoutColumnsInput = {
    update: Prisma.XOR<Prisma.BoardUpdateWithoutColumnsInput, Prisma.BoardUncheckedUpdateWithoutColumnsInput>;
    create: Prisma.XOR<Prisma.BoardCreateWithoutColumnsInput, Prisma.BoardUncheckedCreateWithoutColumnsInput>;
    where?: Prisma.BoardWhereInput;
};
export type BoardUpdateToOneWithWhereWithoutColumnsInput = {
    where?: Prisma.BoardWhereInput;
    data: Prisma.XOR<Prisma.BoardUpdateWithoutColumnsInput, Prisma.BoardUncheckedUpdateWithoutColumnsInput>;
};
export type BoardUpdateWithoutColumnsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardUncheckedUpdateWithoutColumnsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BoardCountOutputType = {
    columns: number;
};
export type BoardCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    columns?: boolean | BoardCountOutputTypeCountColumnsArgs;
};
export type BoardCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardCountOutputTypeSelect<ExtArgs> | null;
};
export type BoardCountOutputTypeCountColumnsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ColumnWhereInput;
};
export type BoardSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    createdAt?: boolean;
    columns?: boolean | Prisma.Board$columnsArgs<ExtArgs>;
    _count?: boolean | Prisma.BoardCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["board"]>;
export type BoardSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["board"]>;
export type BoardSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["board"]>;
export type BoardSelectScalar = {
    id?: boolean;
    title?: boolean;
    createdAt?: boolean;
};
export type BoardOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "createdAt", ExtArgs["result"]["board"]>;
export type BoardInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    columns?: boolean | Prisma.Board$columnsArgs<ExtArgs>;
    _count?: boolean | Prisma.BoardCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BoardIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type BoardIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $BoardPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Board";
    objects: {
        columns: Prisma.$ColumnPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        createdAt: Date;
    }, ExtArgs["result"]["board"]>;
    composites: {};
};
export type BoardGetPayload<S extends boolean | null | undefined | BoardDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BoardPayload, S>;
export type BoardCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BoardCountAggregateInputType | true;
};
export interface BoardDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Board'];
        meta: {
            name: 'Board';
        };
    };
    findUnique<T extends BoardFindUniqueArgs>(args: Prisma.SelectSubset<T, BoardFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BoardFindFirstArgs>(args?: Prisma.SelectSubset<T, BoardFindFirstArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BoardFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BoardFindManyArgs>(args?: Prisma.SelectSubset<T, BoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BoardCreateArgs>(args: Prisma.SelectSubset<T, BoardCreateArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BoardCreateManyArgs>(args?: Prisma.SelectSubset<T, BoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BoardCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BoardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BoardDeleteArgs>(args: Prisma.SelectSubset<T, BoardDeleteArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BoardUpdateArgs>(args: Prisma.SelectSubset<T, BoardUpdateArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BoardDeleteManyArgs>(args?: Prisma.SelectSubset<T, BoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BoardUpdateManyArgs>(args: Prisma.SelectSubset<T, BoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BoardUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BoardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BoardUpsertArgs>(args: Prisma.SelectSubset<T, BoardUpsertArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BoardCountArgs>(args?: Prisma.Subset<T, BoardCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BoardCountAggregateOutputType> : number>;
    aggregate<T extends BoardAggregateArgs>(args: Prisma.Subset<T, BoardAggregateArgs>): Prisma.PrismaPromise<GetBoardAggregateType<T>>;
    groupBy<T extends BoardGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BoardGroupByArgs['orderBy'];
    } : {
        orderBy?: BoardGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BoardFieldRefs;
}
export interface Prisma__BoardClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    columns<T extends Prisma.Board$columnsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Board$columnsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BoardFieldRefs {
    readonly id: Prisma.FieldRef<"Board", 'String'>;
    readonly title: Prisma.FieldRef<"Board", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Board", 'DateTime'>;
}
export type BoardFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardSelect<ExtArgs> | null;
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    include?: Prisma.BoardInclude<ExtArgs> | null;
    where: Prisma.BoardWhereUniqueInput;
};
export type BoardFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardSelect<ExtArgs> | null;
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    include?: Prisma.BoardInclude<ExtArgs> | null;
    where: Prisma.BoardWhereUniqueInput;
};
export type BoardFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardSelect<ExtArgs> | null;
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    include?: Prisma.BoardInclude<ExtArgs> | null;
    where?: Prisma.BoardWhereInput;
    orderBy?: Prisma.BoardOrderByWithRelationInput | Prisma.BoardOrderByWithRelationInput[];
    cursor?: Prisma.BoardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardScalarFieldEnum | Prisma.BoardScalarFieldEnum[];
};
export type BoardFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardSelect<ExtArgs> | null;
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    include?: Prisma.BoardInclude<ExtArgs> | null;
    where?: Prisma.BoardWhereInput;
    orderBy?: Prisma.BoardOrderByWithRelationInput | Prisma.BoardOrderByWithRelationInput[];
    cursor?: Prisma.BoardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardScalarFieldEnum | Prisma.BoardScalarFieldEnum[];
};
export type BoardFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardSelect<ExtArgs> | null;
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    include?: Prisma.BoardInclude<ExtArgs> | null;
    where?: Prisma.BoardWhereInput;
    orderBy?: Prisma.BoardOrderByWithRelationInput | Prisma.BoardOrderByWithRelationInput[];
    cursor?: Prisma.BoardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoardScalarFieldEnum | Prisma.BoardScalarFieldEnum[];
};
export type BoardCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardSelect<ExtArgs> | null;
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    include?: Prisma.BoardInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardCreateInput, Prisma.BoardUncheckedCreateInput>;
};
export type BoardCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BoardCreateManyInput | Prisma.BoardCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BoardCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    data: Prisma.BoardCreateManyInput | Prisma.BoardCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BoardUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardSelect<ExtArgs> | null;
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    include?: Prisma.BoardInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardUpdateInput, Prisma.BoardUncheckedUpdateInput>;
    where: Prisma.BoardWhereUniqueInput;
};
export type BoardUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BoardUpdateManyMutationInput, Prisma.BoardUncheckedUpdateManyInput>;
    where?: Prisma.BoardWhereInput;
    limit?: number;
};
export type BoardUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoardUpdateManyMutationInput, Prisma.BoardUncheckedUpdateManyInput>;
    where?: Prisma.BoardWhereInput;
    limit?: number;
};
export type BoardUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardSelect<ExtArgs> | null;
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    include?: Prisma.BoardInclude<ExtArgs> | null;
    where: Prisma.BoardWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoardCreateInput, Prisma.BoardUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BoardUpdateInput, Prisma.BoardUncheckedUpdateInput>;
};
export type BoardDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardSelect<ExtArgs> | null;
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    include?: Prisma.BoardInclude<ExtArgs> | null;
    where: Prisma.BoardWhereUniqueInput;
};
export type BoardDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoardWhereInput;
    limit?: number;
};
export type Board$columnsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
    where?: Prisma.ColumnWhereInput;
    orderBy?: Prisma.ColumnOrderByWithRelationInput | Prisma.ColumnOrderByWithRelationInput[];
    cursor?: Prisma.ColumnWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ColumnScalarFieldEnum | Prisma.ColumnScalarFieldEnum[];
};
export type BoardDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoardSelect<ExtArgs> | null;
    omit?: Prisma.BoardOmit<ExtArgs> | null;
    include?: Prisma.BoardInclude<ExtArgs> | null;
};
export {};
