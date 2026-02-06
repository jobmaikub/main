import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Major } from "@/lib/majors.api";

interface EditMajorsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: Major) => void;
  major: Major | null;
}

export function EditMajorsSheet({
  open,
  onOpenChange,
  onSubmit,
  major,
}: EditMajorsSheetProps) {
  const [name, setName] = useState("");
  const [facultyId, setFacultyId] = useState<number | "">("");

  useEffect(() => {
    if (major) {
      setName(major.name);
      setFacultyId(major.faculty_id);
    }
  }, [major]);

  useEffect(() => {
    if (!open) {
      setName("");
      setFacultyId("");
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!major || facultyId === "") return;

    onSubmit({
      ...major,
      name: name.trim(),
      faculty_id: facultyId,
    });

    onOpenChange(false);
  };

  const isDisabled = !name.trim() || facultyId === "";

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px] bg-white">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl font-semibold">
            Edit Major
          </SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label>
              Major Name <span className="text-destructive">*</span>
            </Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label>
              Faculty <span className="text-destructive">*</span>
            </Label>

            <Select
              value={facultyId === "" ? "" : facultyId.toString()}
              onValueChange={(v) => setFacultyId(Number(v))}
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select faculty" />
              </SelectTrigger>

              <SelectContent className="bg-white">
                <SelectItem value="1">Engineering</SelectItem>
                <SelectItem value="2">Science</SelectItem>
                <SelectItem value="3">Arts</SelectItem>
                <SelectItem value="4">Business</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={isDisabled}
              className="flex-1 bg-[#4A5DF9] text-white disabled:opacity-50"
            >
              Update
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}

