import { FC } from "react";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { Typography } from "../Typography";

export const AppBar: FC = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center">
          <NewspaperIcon className="w-6 h-6 mr-3 text-blue-600" />
          <Typography.H5 className="w-full text-gray-900 hover:text-blue-600 transition-colors no-underline">
            Просмотр статей
          </Typography.H5>
        </div>
        {/* Можно добавить дополнительную навигацию или кнопки справа */}
      </div>
    </header>
  );
};
