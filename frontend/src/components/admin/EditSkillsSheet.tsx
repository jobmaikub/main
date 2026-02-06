// EditSkillsSheet.tsx
import { useState, useEffect } from "react";
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
import { Skill } from "@/lib/skills.api";
import { SkillFormData } from "./AddSkillsSheet";

interface EditSkillsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  skill: Skill | null;
  onSubmit: (
    data: SkillFormData & { skill_id: number }
  ) => Promise<void>;
}

export function EditSkillsSheet({
  open,
  onOpenChange,
  onSubmit,
  skill,
}: EditSkillsSheetProps) {
  const [formData, setFormData] = useState<SkillFormData>({
    name: "",
    faculty: "",
    major: "",
  });

  /** map Skill → Form */
  useEffect(() => {
    if (skill) {
      setFormData({
        name: skill.name,
        faculty: skill.category.faculty,
        major: skill.category.major,
      });
    }
  }, [skill]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!skill) return;

    await onSubmit({
      skill_id: skill.skill_id,
      ...formData,
    });

    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto bg-white">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl font-semibold">
            Edit Skill
          </SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Skill Name */}
          <div className="space-y-2">
            <Label>
              Skill Name <span className="text-destructive">*</span>
            </Label>
            <Input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="bg-white"
            />
          </div>

          {/* Faculty */}
          <div className="space-y-2">
            <Label>
              Faculty <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.faculty}
              onValueChange={(v) =>
                setFormData({ ...formData, faculty: v })
              }
            >
              <SelectTrigger className="bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
                <SelectItem value="Arts">Arts</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Major */}
          <div className="space-y-2">
            <Label>
              Major <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.major}
              onValueChange={(v) =>
                setFormData({ ...formData, major: v })
              }
            >
              <SelectTrigger className="bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="Computer Science">
                  Computer Science
                </SelectItem>
                <SelectItem value="Information Technology">
                  Information Technology
                </SelectItem>
                <SelectItem value="Digital Media">
                  Digital Media
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Actions */}
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
              className="flex-1 bg-[#4A5DF9] text-white"
            >
              Update
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
