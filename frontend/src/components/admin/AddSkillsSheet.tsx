import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddSkillsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: SkillFormData) => void;
}

export interface SkillFormData {
  name: string;
  faculty: string;
  major: string;
}

export function AddSkillsSheet({ open, onOpenChange, onSubmit }: AddSkillsSheetProps) {
  const [formData, setFormData] = useState<SkillFormData>({
    name: "",
    faculty: "",
    major: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", faculty: "", major: "" });
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto bg-white">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl font-semibold">Add New Skill</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Skill Name <span className="text-destructive">*</span></Label>
            <Input
              id="name"
              placeholder="e.g., Python Programming"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label>Faculty <span className="text-destructive">*</span></Label>
            <Select onValueChange={(v) => setFormData({ ...formData, faculty: v })} required>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select Faculty" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
                <SelectItem value="Arts">Arts</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Major <span className="text-destructive">*</span></Label>
            <Select onValueChange={(v) => setFormData({ ...formData, major: v })} required>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select Major" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="Computer Science">Computer Science</SelectItem>
                <SelectItem value="Information Technology">Information Technology</SelectItem>
                <SelectItem value="Digital Media">Digital Media</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-white hover:bg-white text-black hover:text-black border-slate-200 shadow-none"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-[#4A5DF9] hover:bg-[#4A5DF9]/90 text-white">
              Create
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}