import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type ColumnModel = runtime.Types.Result.DefaultSelection<Prisma.$ColumnPayload>;
export type AggregateColumn = {
    _count: ColumnCountAggregateOutputType | null;
    _avg: ColumnAvgAggregateOutputType | null;
    _sum: ColumnSumAggregateOutputType | null;
    _min: ColumnMinAggregateOutputType | null;
    _max: ColumnMaxAggregateOutputType | null;
};
export type ColumnAvgAggregateOutputType = {
    order: number | null;
};
export type ColumnSumAggregateOutputType = {
    order: number | null;
};
export type ColumnMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    order: number | null;
    createdAt: Date | null;
    boardId: string | null;
};
export type ColumnMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    order: number | null;
    createdAt: Date | null;
    boardId: string | null;
};
export type ColumnCountAggregateOutputType = {
    id: number;
    title: number;
    order: number;
    createdAt: number;
    boardId: number;
    _all: number;
};
export type ColumnAvgAggregateInputType = {
    order?: true;
};
export type ColumnSumAggregateInputType = {
    order?: true;
};
export type ColumnMinAggregateInputType = {
    id?: true;
    title?: true;
    order?: true;
    createdAt?: true;
    boardId?: true;
};
export type ColumnMaxAggregateInputType = {
    id?: true;
    title?: true;
    order?: true;
    createdAt?: true;
    boardId?: true;
};
export type ColumnCountAggregateInputType = {
    id?: true;
    title?: true;
    order?: true;
    createdAt?: true;
    boardId?: true;
    _all?: true;
};
export type ColumnAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ColumnWhereInput;
    orderBy?: Prisma.ColumnOrderByWithRelationInput | Prisma.ColumnOrderByWithRelationInput[];
    cursor?: Prisma.ColumnWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ColumnCountAggregateInputType;
    _avg?: ColumnAvgAggregateInputType;
    _sum?: ColumnSumAggregateInputType;
    _min?: ColumnMinAggregateInputType;
    _max?: ColumnMaxAggregateInputType;
};
export type GetColumnAggregateType<T extends ColumnAggregateArgs> = {
    [P in keyof T & keyof AggregateColumn]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateColumn[P]> : Prisma.GetScalarType<T[P], AggregateColumn[P]>;
};
export type ColumnGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ColumnWhereInput;
    orderBy?: Prisma.ColumnOrderByWithAggregationInput | Prisma.ColumnOrderByWithAggregationInput[];
    by: Prisma.ColumnScalarFieldEnum[] | Prisma.ColumnScalarFieldEnum;
    having?: Prisma.ColumnScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ColumnCountAggregateInputType | true;
    _avg?: ColumnAvgAggregateInputType;
    _sum?: ColumnSumAggregateInputType;
    _min?: ColumnMinAggregateInputType;
    _max?: ColumnMaxAggregateInputType;
};
export type ColumnGroupByOutputType = {
    id: string;
    title: string;
    order: number;
    createdAt: Date;
    boardId: string;
    _count: ColumnCountAggregateOutputType | null;
    _avg: ColumnAvgAggregateOutputType | null;
    _sum: ColumnSumAggregateOutputType | null;
    _min: ColumnMinAggregateOutputType | null;
    _max: ColumnMaxAggregateOutputType | null;
};
type GetColumnGroupByPayload<T extends ColumnGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ColumnGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ColumnGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ColumnGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ColumnGroupByOutputType[P]>;
}>>;
export type ColumnWhereInput = {
    AND?: Prisma.ColumnWhereInput | Prisma.ColumnWhereInput[];
    OR?: Prisma.ColumnWhereInput[];
    NOT?: Prisma.ColumnWhereInput | Prisma.ColumnWhereInput[];
    id?: Prisma.StringFilter<"Column"> | string;
    title?: Prisma.StringFilter<"Column"> | string;
    order?: Prisma.IntFilter<"Column"> | number;
    createdAt?: Prisma.DateTimeFilter<"Column"> | Date | string;
    boardId?: Prisma.StringFilter<"Column"> | string;
    tasks?: Prisma.TaskListRelationFilter;
    board?: Prisma.XOR<Prisma.BoardScalarRelationFilter, Prisma.BoardWhereInput>;
};
export type ColumnOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
    tasks?: Prisma.TaskOrderByRelationAggregateInput;
    board?: Prisma.BoardOrderByWithRelationInput;
};
export type ColumnWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ColumnWhereInput | Prisma.ColumnWhereInput[];
    OR?: Prisma.ColumnWhereInput[];
    NOT?: Prisma.ColumnWhereInput | Prisma.ColumnWhereInput[];
    title?: Prisma.StringFilter<"Column"> | string;
    order?: Prisma.IntFilter<"Column"> | number;
    createdAt?: Prisma.DateTimeFilter<"Column"> | Date | string;
    boardId?: Prisma.StringFilter<"Column"> | string;
    tasks?: Prisma.TaskListRelationFilter;
    board?: Prisma.XOR<Prisma.BoardScalarRelationFilter, Prisma.BoardWhereInput>;
}, "id">;
export type ColumnOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
    _count?: Prisma.ColumnCountOrderByAggregateInput;
    _avg?: Prisma.ColumnAvgOrderByAggregateInput;
    _max?: Prisma.ColumnMaxOrderByAggregateInput;
    _min?: Prisma.ColumnMinOrderByAggregateInput;
    _sum?: Prisma.ColumnSumOrderByAggregateInput;
};
export type ColumnScalarWhereWithAggregatesInput = {
    AND?: Prisma.ColumnScalarWhereWithAggregatesInput | Prisma.ColumnScalarWhereWithAggregatesInput[];
    OR?: Prisma.ColumnScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ColumnScalarWhereWithAggregatesInput | Prisma.ColumnScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Column"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Column"> | string;
    order?: Prisma.IntWithAggregatesFilter<"Column"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Column"> | Date | string;
    boardId?: Prisma.StringWithAggregatesFilter<"Column"> | string;
};
export type ColumnCreateInput = {
    id?: string;
    title: string;
    order: number;
    createdAt?: Date | string;
    tasks?: Prisma.TaskCreateNestedManyWithoutColumnInput;
    board: Prisma.BoardCreateNestedOneWithoutColumnsInput;
};
export type ColumnUncheckedCreateInput = {
    id?: string;
    title: string;
    order: number;
    createdAt?: Date | string;
    boardId: string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutColumnInput;
};
export type ColumnUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUpdateManyWithoutColumnNestedInput;
    board?: Prisma.BoardUpdateOneRequiredWithoutColumnsNestedInput;
};
export type ColumnUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    boardId?: Prisma.StringFieldUpdateOperationsInput | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutColumnNestedInput;
};
export type ColumnCreateManyInput = {
    id?: string;
    title: string;
    order: number;
    createdAt?: Date | string;
    boardId: string;
};
export type ColumnUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ColumnUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    boardId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ColumnListRelationFilter = {
    every?: Prisma.ColumnWhereInput;
    some?: Prisma.ColumnWhereInput;
    none?: Prisma.ColumnWhereInput;
};
export type ColumnOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ColumnCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
};
export type ColumnAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type ColumnMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
};
export type ColumnMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    boardId?: Prisma.SortOrder;
};
export type ColumnSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type ColumnScalarRelationFilter = {
    is?: Prisma.ColumnWhereInput;
    isNot?: Prisma.ColumnWhereInput;
};
export type ColumnCreateNestedManyWithoutBoardInput = {
    create?: Prisma.XOR<Prisma.ColumnCreateWithoutBoardInput, Prisma.ColumnUncheckedCreateWithoutBoardInput> | Prisma.ColumnCreateWithoutBoardInput[] | Prisma.ColumnUncheckedCreateWithoutBoardInput[];
    connectOrCreate?: Prisma.ColumnCreateOrConnectWithoutBoardInput | Prisma.ColumnCreateOrConnectWithoutBoardInput[];
    createMany?: Prisma.ColumnCreateManyBoardInputEnvelope;
    connect?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
};
export type ColumnUncheckedCreateNestedManyWithoutBoardInput = {
    create?: Prisma.XOR<Prisma.ColumnCreateWithoutBoardInput, Prisma.ColumnUncheckedCreateWithoutBoardInput> | Prisma.ColumnCreateWithoutBoardInput[] | Prisma.ColumnUncheckedCreateWithoutBoardInput[];
    connectOrCreate?: Prisma.ColumnCreateOrConnectWithoutBoardInput | Prisma.ColumnCreateOrConnectWithoutBoardInput[];
    createMany?: Prisma.ColumnCreateManyBoardInputEnvelope;
    connect?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
};
export type ColumnUpdateManyWithoutBoardNestedInput = {
    create?: Prisma.XOR<Prisma.ColumnCreateWithoutBoardInput, Prisma.ColumnUncheckedCreateWithoutBoardInput> | Prisma.ColumnCreateWithoutBoardInput[] | Prisma.ColumnUncheckedCreateWithoutBoardInput[];
    connectOrCreate?: Prisma.ColumnCreateOrConnectWithoutBoardInput | Prisma.ColumnCreateOrConnectWithoutBoardInput[];
    upsert?: Prisma.ColumnUpsertWithWhereUniqueWithoutBoardInput | Prisma.ColumnUpsertWithWhereUniqueWithoutBoardInput[];
    createMany?: Prisma.ColumnCreateManyBoardInputEnvelope;
    set?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
    disconnect?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
    delete?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
    connect?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
    update?: Prisma.ColumnUpdateWithWhereUniqueWithoutBoardInput | Prisma.ColumnUpdateWithWhereUniqueWithoutBoardInput[];
    updateMany?: Prisma.ColumnUpdateManyWithWhereWithoutBoardInput | Prisma.ColumnUpdateManyWithWhereWithoutBoardInput[];
    deleteMany?: Prisma.ColumnScalarWhereInput | Prisma.ColumnScalarWhereInput[];
};
export type ColumnUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: Prisma.XOR<Prisma.ColumnCreateWithoutBoardInput, Prisma.ColumnUncheckedCreateWithoutBoardInput> | Prisma.ColumnCreateWithoutBoardInput[] | Prisma.ColumnUncheckedCreateWithoutBoardInput[];
    connectOrCreate?: Prisma.ColumnCreateOrConnectWithoutBoardInput | Prisma.ColumnCreateOrConnectWithoutBoardInput[];
    upsert?: Prisma.ColumnUpsertWithWhereUniqueWithoutBoardInput | Prisma.ColumnUpsertWithWhereUniqueWithoutBoardInput[];
    createMany?: Prisma.ColumnCreateManyBoardInputEnvelope;
    set?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
    disconnect?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
    delete?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
    connect?: Prisma.ColumnWhereUniqueInput | Prisma.ColumnWhereUniqueInput[];
    update?: Prisma.ColumnUpdateWithWhereUniqueWithoutBoardInput | Prisma.ColumnUpdateWithWhereUniqueWithoutBoardInput[];
    updateMany?: Prisma.ColumnUpdateManyWithWhereWithoutBoardInput | Prisma.ColumnUpdateManyWithWhereWithoutBoardInput[];
    deleteMany?: Prisma.ColumnScalarWhereInput | Prisma.ColumnScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ColumnCreateNestedOneWithoutTasksInput = {
    create?: Prisma.XOR<Prisma.ColumnCreateWithoutTasksInput, Prisma.ColumnUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.ColumnCreateOrConnectWithoutTasksInput;
    connect?: Prisma.ColumnWhereUniqueInput;
};
export type ColumnUpdateOneRequiredWithoutTasksNestedInput = {
    create?: Prisma.XOR<Prisma.ColumnCreateWithoutTasksInput, Prisma.ColumnUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.ColumnCreateOrConnectWithoutTasksInput;
    upsert?: Prisma.ColumnUpsertWithoutTasksInput;
    connect?: Prisma.ColumnWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ColumnUpdateToOneWithWhereWithoutTasksInput, Prisma.ColumnUpdateWithoutTasksInput>, Prisma.ColumnUncheckedUpdateWithoutTasksInput>;
};
export type ColumnCreateWithoutBoardInput = {
    id?: string;
    title: string;
    order: number;
    createdAt?: Date | string;
    tasks?: Prisma.TaskCreateNestedManyWithoutColumnInput;
};
export type ColumnUncheckedCreateWithoutBoardInput = {
    id?: string;
    title: string;
    order: number;
    createdAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutColumnInput;
};
export type ColumnCreateOrConnectWithoutBoardInput = {
    where: Prisma.ColumnWhereUniqueInput;
    create: Prisma.XOR<Prisma.ColumnCreateWithoutBoardInput, Prisma.ColumnUncheckedCreateWithoutBoardInput>;
};
export type ColumnCreateManyBoardInputEnvelope = {
    data: Prisma.ColumnCreateManyBoardInput | Prisma.ColumnCreateManyBoardInput[];
    skipDuplicates?: boolean;
};
export type ColumnUpsertWithWhereUniqueWithoutBoardInput = {
    where: Prisma.ColumnWhereUniqueInput;
    update: Prisma.XOR<Prisma.ColumnUpdateWithoutBoardInput, Prisma.ColumnUncheckedUpdateWithoutBoardInput>;
    create: Prisma.XOR<Prisma.ColumnCreateWithoutBoardInput, Prisma.ColumnUncheckedCreateWithoutBoardInput>;
};
export type ColumnUpdateWithWhereUniqueWithoutBoardInput = {
    where: Prisma.ColumnWhereUniqueInput;
    data: Prisma.XOR<Prisma.ColumnUpdateWithoutBoardInput, Prisma.ColumnUncheckedUpdateWithoutBoardInput>;
};
export type ColumnUpdateManyWithWhereWithoutBoardInput = {
    where: Prisma.ColumnScalarWhereInput;
    data: Prisma.XOR<Prisma.ColumnUpdateManyMutationInput, Prisma.ColumnUncheckedUpdateManyWithoutBoardInput>;
};
export type ColumnScalarWhereInput = {
    AND?: Prisma.ColumnScalarWhereInput | Prisma.ColumnScalarWhereInput[];
    OR?: Prisma.ColumnScalarWhereInput[];
    NOT?: Prisma.ColumnScalarWhereInput | Prisma.ColumnScalarWhereInput[];
    id?: Prisma.StringFilter<"Column"> | string;
    title?: Prisma.StringFilter<"Column"> | string;
    order?: Prisma.IntFilter<"Column"> | number;
    createdAt?: Prisma.DateTimeFilter<"Column"> | Date | string;
    boardId?: Prisma.StringFilter<"Column"> | string;
};
export type ColumnCreateWithoutTasksInput = {
    id?: string;
    title: string;
    order: number;
    createdAt?: Date | string;
    board: Prisma.BoardCreateNestedOneWithoutColumnsInput;
};
export type ColumnUncheckedCreateWithoutTasksInput = {
    id?: string;
    title: string;
    order: number;
    createdAt?: Date | string;
    boardId: string;
};
export type ColumnCreateOrConnectWithoutTasksInput = {
    where: Prisma.ColumnWhereUniqueInput;
    create: Prisma.XOR<Prisma.ColumnCreateWithoutTasksInput, Prisma.ColumnUncheckedCreateWithoutTasksInput>;
};
export type ColumnUpsertWithoutTasksInput = {
    update: Prisma.XOR<Prisma.ColumnUpdateWithoutTasksInput, Prisma.ColumnUncheckedUpdateWithoutTasksInput>;
    create: Prisma.XOR<Prisma.ColumnCreateWithoutTasksInput, Prisma.ColumnUncheckedCreateWithoutTasksInput>;
    where?: Prisma.ColumnWhereInput;
};
export type ColumnUpdateToOneWithWhereWithoutTasksInput = {
    where?: Prisma.ColumnWhereInput;
    data: Prisma.XOR<Prisma.ColumnUpdateWithoutTasksInput, Prisma.ColumnUncheckedUpdateWithoutTasksInput>;
};
export type ColumnUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    board?: Prisma.BoardUpdateOneRequiredWithoutColumnsNestedInput;
};
export type ColumnUncheckedUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    boardId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ColumnCreateManyBoardInput = {
    id?: string;
    title: string;
    order: number;
    createdAt?: Date | string;
};
export type ColumnUpdateWithoutBoardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUpdateManyWithoutColumnNestedInput;
};
export type ColumnUncheckedUpdateWithoutBoardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutColumnNestedInput;
};
export type ColumnUncheckedUpdateManyWithoutBoardInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ColumnCountOutputType = {
    tasks: number;
};
export type ColumnCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tasks?: boolean | ColumnCountOutputTypeCountTasksArgs;
};
export type ColumnCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnCountOutputTypeSelect<ExtArgs> | null;
};
export type ColumnCountOutputTypeCountTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
};
export type ColumnSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    order?: boolean;
    createdAt?: boolean;
    boardId?: boolean;
    tasks?: boolean | Prisma.Column$tasksArgs<ExtArgs>;
    board?: boolean | Prisma.BoardDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ColumnCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["column"]>;
export type ColumnSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    order?: boolean;
    createdAt?: boolean;
    boardId?: boolean;
    board?: boolean | Prisma.BoardDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["column"]>;
export type ColumnSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    order?: boolean;
    createdAt?: boolean;
    boardId?: boolean;
    board?: boolean | Prisma.BoardDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["column"]>;
export type ColumnSelectScalar = {
    id?: boolean;
    title?: boolean;
    order?: boolean;
    createdAt?: boolean;
    boardId?: boolean;
};
export type ColumnOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "order" | "createdAt" | "boardId", ExtArgs["result"]["column"]>;
export type ColumnInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tasks?: boolean | Prisma.Column$tasksArgs<ExtArgs>;
    board?: boolean | Prisma.BoardDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.ColumnCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ColumnIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    board?: boolean | Prisma.BoardDefaultArgs<ExtArgs>;
};
export type ColumnIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    board?: boolean | Prisma.BoardDefaultArgs<ExtArgs>;
};
export type $ColumnPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Column";
    objects: {
        tasks: Prisma.$TaskPayload<ExtArgs>[];
        board: Prisma.$BoardPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        order: number;
        createdAt: Date;
        boardId: string;
    }, ExtArgs["result"]["column"]>;
    composites: {};
};
export type ColumnGetPayload<S extends boolean | null | undefined | ColumnDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ColumnPayload, S>;
export type ColumnCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ColumnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ColumnCountAggregateInputType | true;
};
export interface ColumnDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Column'];
        meta: {
            name: 'Column';
        };
    };
    findUnique<T extends ColumnFindUniqueArgs>(args: Prisma.SelectSubset<T, ColumnFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ColumnFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ColumnFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ColumnFindFirstArgs>(args?: Prisma.SelectSubset<T, ColumnFindFirstArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ColumnFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ColumnFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ColumnFindManyArgs>(args?: Prisma.SelectSubset<T, ColumnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ColumnCreateArgs>(args: Prisma.SelectSubset<T, ColumnCreateArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ColumnCreateManyArgs>(args?: Prisma.SelectSubset<T, ColumnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ColumnCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ColumnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ColumnDeleteArgs>(args: Prisma.SelectSubset<T, ColumnDeleteArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ColumnUpdateArgs>(args: Prisma.SelectSubset<T, ColumnUpdateArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ColumnDeleteManyArgs>(args?: Prisma.SelectSubset<T, ColumnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ColumnUpdateManyArgs>(args: Prisma.SelectSubset<T, ColumnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ColumnUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ColumnUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ColumnUpsertArgs>(args: Prisma.SelectSubset<T, ColumnUpsertArgs<ExtArgs>>): Prisma.Prisma__ColumnClient<runtime.Types.Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ColumnCountArgs>(args?: Prisma.Subset<T, ColumnCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ColumnCountAggregateOutputType> : number>;
    aggregate<T extends ColumnAggregateArgs>(args: Prisma.Subset<T, ColumnAggregateArgs>): Prisma.PrismaPromise<GetColumnAggregateType<T>>;
    groupBy<T extends ColumnGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ColumnGroupByArgs['orderBy'];
    } : {
        orderBy?: ColumnGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ColumnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColumnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ColumnFieldRefs;
}
export interface Prisma__ColumnClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tasks<T extends Prisma.Column$tasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Column$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    board<T extends Prisma.BoardDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BoardDefaultArgs<ExtArgs>>): Prisma.Prisma__BoardClient<runtime.Types.Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ColumnFieldRefs {
    readonly id: Prisma.FieldRef<"Column", 'String'>;
    readonly title: Prisma.FieldRef<"Column", 'String'>;
    readonly order: Prisma.FieldRef<"Column", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Column", 'DateTime'>;
    readonly boardId: Prisma.FieldRef<"Column", 'String'>;
}
export type ColumnFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
    where: Prisma.ColumnWhereUniqueInput;
};
export type ColumnFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
    where: Prisma.ColumnWhereUniqueInput;
};
export type ColumnFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ColumnFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ColumnFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ColumnCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ColumnCreateInput, Prisma.ColumnUncheckedCreateInput>;
};
export type ColumnCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ColumnCreateManyInput | Prisma.ColumnCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ColumnCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    data: Prisma.ColumnCreateManyInput | Prisma.ColumnCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ColumnIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ColumnUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ColumnUpdateInput, Prisma.ColumnUncheckedUpdateInput>;
    where: Prisma.ColumnWhereUniqueInput;
};
export type ColumnUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ColumnUpdateManyMutationInput, Prisma.ColumnUncheckedUpdateManyInput>;
    where?: Prisma.ColumnWhereInput;
    limit?: number;
};
export type ColumnUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ColumnUpdateManyMutationInput, Prisma.ColumnUncheckedUpdateManyInput>;
    where?: Prisma.ColumnWhereInput;
    limit?: number;
    include?: Prisma.ColumnIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ColumnUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
    where: Prisma.ColumnWhereUniqueInput;
    create: Prisma.XOR<Prisma.ColumnCreateInput, Prisma.ColumnUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ColumnUpdateInput, Prisma.ColumnUncheckedUpdateInput>;
};
export type ColumnDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
    where: Prisma.ColumnWhereUniqueInput;
};
export type ColumnDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ColumnWhereInput;
    limit?: number;
};
export type Column$tasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type ColumnDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ColumnSelect<ExtArgs> | null;
    omit?: Prisma.ColumnOmit<ExtArgs> | null;
    include?: Prisma.ColumnInclude<ExtArgs> | null;
};
export {};
