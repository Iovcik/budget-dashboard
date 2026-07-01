"use client";

import { useState, useTransition } from "react";
import { renameBoard } from "../api/renameBoard.action";

interface RenameBoardFormProps {
    boardId: number;
    currentName: string;
}

export const RenameBoardForm = ({ boardId, currentName }: RenameBoardFormProps) => {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(currentName);
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = name.trim();
        if (!trimmed || trimmed === currentName) {
            setEditing(false);
            return;
        }
        setError(null);
        startTransition(async () => {
            const result = await renameBoard(boardId, trimmed);
            if (result.error) {
                setError(result.error);
            } else {
                setEditing(false);
            }
        });
    };

    if (editing) {
        return (
            <form onSubmit={handleSubmit} className="flex flex-col gap-1">
                <div className="flex gap-1 items-center">
                    <input
                        className="input input-sm input-bordered flex-1"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                        disabled={isPending}
                        minLength={3}
                        maxLength={100}
                    />
                    <button type="submit" className="btn btn-sm btn-primary" disabled={isPending}>
                        Save
                    </button>
                    <button
                        type="button"
                        className="btn btn-sm"
                        onClick={() => { setName(currentName); setEditing(false); setError(null); }}
                    >
                        Cancel
                    </button>
                </div>
                {error && <p className="text-sm text-error">{error}</p>}
            </form>
        );
    }

    return (
        <button className="btn btn-sm" onClick={() => setEditing(true)}>
            Rename
        </button>
    );
};
