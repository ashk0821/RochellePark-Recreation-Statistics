import React from "react";
import "./Table.css";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const PlayerTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.players);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort("first")}
              className={getClassNamesFor("first")}
            >
              First
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("last")}
              className={getClassNamesFor("last")}
            >
              Last
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("ppg")}
              className={getClassNamesFor("ppg")}
            >
              PPG
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("apg")}
              className={getClassNamesFor("apg")}
            >
              APG
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("rpg")}
              className={getClassNamesFor("rpg")}
            >
              RPG
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("gp")}
              className={getClassNamesFor("gp")}
            >
              Games Played
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.first}</td>
            <td>{item.last}</td>
            <td>{item.ppg}</td>
            <td>{item.apg}</td>
            <td>{item.rpg}</td>
            <td>{item.gp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function Table() {
  return (
    <div className="Table">
      <PlayerTable
        players={[
          {
            id: 1,
            first: "Derrick",
            last: "Rose",
            ppg: 24,
            apg: 8,
            rpg: 4,
            gp: 45,
          },
          {
            id: 2,
            first: "Aashir",
            last: "Khan",
            ppg: 0,
            apg: 0,
            rpg: 0,
            gp: 100,
          },
          {
            id: 3,
            first: 'Amani "🐐"',
            last: "Islam",
            ppg: 40,
            apg: 20,
            rpg: 10,
            gp: 35,
          },
          {
            id: 4,
            first: "Patrick",
            last: "Hdmajwecaxcz",
            ppg: 20,
            apg: 0,
            rpg: 20,
            gp: 16,
          },
          {
            id: 5,
            first: "Obama",
            last: "?",
            ppg: 100,
            apg: 100,
            rpg: 100,
            gp: 82,
          },
        ]}
      />
    </div>
  );
}
