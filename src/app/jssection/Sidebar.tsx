type SidebarProps = {
  topics: { id: string; title: string }[];
  selectedTopicId: string;
  onSelect: (id: string) => void;
};

export default function Sidebar({ topics, selectedTopicId, onSelect }: SidebarProps) {
  return (
    <aside className="w-full md:w-64 bg-white border-r border-gray-200 p-4">
      <h2 className="font-bold text-xl mb-4 text-purple-700">JS Tutorial</h2>
      <ul className="space-y-1">
        {topics.map((topic) => (
          <li key={topic.id}>
            <button
              className={`w-full text-left px-4 py-2 rounded ${
                selectedTopicId === topic.id
                  ? "bg-purple-100 text-purple-700 font-semibold"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => onSelect(topic.id)}
            >
              {topic.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}