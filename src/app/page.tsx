"use client";
import React, { useCallback } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    User,
    Chip,
    Tooltip,
    getKeyValue,
    ChipProps,
} from "@nextui-org/react";
import {
    FiEdit as EditIcon,
    FiTrash2 as DeleteIcon,
    FiEye as EyeIcon,
} from "react-icons/fi";
import { columns, users, Column, UserType, UserKey } from "@/data";

const statusColorMap: Record<string, ChipProps["color"]> = {
    active: "success",
    paused: "danger",
    vacation: "warning",
};

type TableColumnKey = UserKey & "actions";

const AccountPage = () => {
    const renderCell = useCallback(
        (user: UserType, columnKey: TableColumnKey) => {
            const cellValue = user[columnKey];

            switch (columnKey) {
                case "name":
                    return (
                        <User
                            avatarProps={{ radius: "lg", src: user.avatar }}
                            description={user.email}
                            name={cellValue}
                        >
                            {user.email}
                        </User>
                    );
                case "role":
                    return (
                        <div className="flex flex-col">
                            <p className="text-bold text-sm capitalize">
                                {cellValue}
                            </p>
                            <p className="text-bold text-sm capitalize text-default-400">
                                {user.team}
                            </p>
                        </div>
                    );
                case "status":
                    return (
                        <Chip
                            className="capitalize"
                            color={statusColorMap[user.status]}
                            size="sm"
                            variant="flat"
                        >
                            {cellValue}
                        </Chip>
                    );
                case "actions":
                    return (
                        <div className="relative flex items-center gap-2">
                            <Tooltip content="Details">
                                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                    <EyeIcon />
                                </span>
                            </Tooltip>
                            <Tooltip content="Edit user">
                                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                    <EditIcon />
                                </span>
                            </Tooltip>
                            <Tooltip color="danger" content="Delete user">
                                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                    <DeleteIcon />
                                </span>
                            </Tooltip>
                        </div>
                    );
                default:
                    return cellValue;
            }
        },
        []
    );

    return (
        <Table aria-label="Example table with custom cells">
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn
                        key={column.uid}
                        align={column.uid === "actions" ? "center" : "start"}
                    >
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={users}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => (
                            <TableCell>
                                {renderCell(item, columnKey as TableColumnKey)}
                            </TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

export default AccountPage;
