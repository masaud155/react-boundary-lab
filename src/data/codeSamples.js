export const codeSamples = {
  bigComponents: {
    bad: `function Dashboard() {
  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [filters, setFilters] = useState({});

  return (
    <DashboardShell>
      <Search value={query} onChange={setQuery} />
      <Filters value={filters} onChange={setFilters} />
      <Chart data={applyFilters(filters)} />
      <UserTable search={query} />
      <SettingsModal open={modalOpen} />
    </DashboardShell>
  );
}`,
    good: `function Dashboard() {
  return (
    <DashboardLayout>
      <SearchBar />
      <FilterPanel />
      <ChartPanel />
      <UserTable />
      <SettingsModal />
    </DashboardLayout>
  );
}`,
  },
  statePlacement: {
    bad: `function Dashboard() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Sidebar />
      <Search value={search} onChange={setSearch} />
      <Chart />
      <UserTable search={search} />
    </>
  );
}`,
    good: `function Dashboard() {
  return (
    <>
      <Sidebar />
      <SearchSection />
      <Chart />
    </>
  );
}

function SearchSection() {
  const [search, setSearch] = useState("");
  return <Search value={search} onChange={setSearch} />;
}`,
  },
  propsDrilling: {
    bad: `function App({ user }) {
  return <Dashboard user={user} />;
}

function Dashboard({ user }) {
  return <Layout user={user} />;
}

function Layout({ user }) {
  return <Sidebar user={user} />;
}`,
    good: `function Dashboard() {
  return (
    <Layout>
      <Sidebar>
        <ProfileBadge />
      </Sidebar>
    </Layout>
  );
}`,
  },
  memoizationTrap: {
    bad: `const Dashboard = memo(function Dashboard({ data }) {
  const rows = useMemo(() => buildRows(data), [data]);
  const onSelect = useCallback((id) => {
    setSelected(id);
  }, []);

  return <HugePanel rows={rows} onSelect={onSelect} />;
});`,
    good: `function Dashboard({ data }) {
  return (
    <DashboardLayout>
      <Filters />
      <MemoizedExpensiveChart data={data.chart} />
      <UserTable rows={data.rows} />
    </DashboardLayout>
  );
}`,
  },
  sharedState: {
    bad: `const dashboardState = {
  filters,
  form,
  modal,
  selectedRow,
  chartRange,
  theme,
};`,
    good: `const filterState = createFilterStore();
const modalState = createModalStore();
const tableState = createTableStore();
const formState = createFormStore();`,
  },
  slowLists: {
    bad: `function UserList({ users, selectedId }) {
  return users.map((user) => (
    <UserRow
      key={user.id}
      user={user}
      selected={selectedId === user.id}
    />
  ));
}`,
    good: `const UserRow = memo(function UserRow({
  user,
  selected,
  onSelect,
}) {
  return <Row user={user} active={selected} onClick={onSelect} />;
});`,
  },
  interactionBoundaries: {
    bad: `function Workspace() {
  const [uiState, setUiState] = useState({});
  return <Everything state={uiState} setState={setUiState} />;
}`,
    good: `function Workspace() {
  return (
    <>
      <SearchBoundary />
      <ModalBoundary />
      <SelectionBoundary />
      <FormBoundary />
    </>
  );
}`,
  },
  maintainability: {
    bad: `function Dashboard({ state, setState }) {
  // Every child can read and write everything.
  return <DeepTree state={state} setState={setState} />;
}`,
    good: `function Dashboard() {
  return (
    <DashboardProviders>
      <OwnedSections />
    </DashboardProviders>
  );
}`,
  },
};
