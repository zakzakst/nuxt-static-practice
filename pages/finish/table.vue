<template>
  <div>
    <h1>表組</h1>
    <client-only>
      <!-- 基本的な書き方 -->
      <vue-good-table
        :columns="columns"
        :rows="rows"
      />

      <!-- 各種オプション -->
      <!-- <vue-good-table
        :columns="columns"
        :rows="rows"
        max-height="250px"
        :fixed-header="true"
        :line-numbers="true"
        :row-style-class="rowStyleClassFn"
        compactMode
      /> -->

      <!-- slot -->
      <!-- <vue-good-table
        :columns="columns"
        :rows="rowsNone"
      >
        <div slot="table-actions">表の右上に表示</div>
        <div slot="table-actions-bottom">表の下に表示</div>
        <div slot="emptystate">行がない時に表示</div>
      </vue-good-table> -->

      <!-- ソートオプション -->
      <!-- <vue-good-table
        :columns="columns"
        :rows="rows"
        :sort-options="{
          enabled: true,
          initialSortBy: [
            {field: 'name', type: 'asc'},
            {field: 'age', type: 'desc'}
          ],
        }"
      /> -->


      <!-- 検索オプション -->
      <!-- <vue-good-table
        :columns="columns"
        :rows="rows"
        :search-options="{
          enabled: true,
          trigger: 'enter',
          skipDiacritics: true,
          searchFn: searchFn,
          placeholder: 'テーブルを検索します',
        }"
      /> -->

      <!-- ページネーションオプション -->
      <!-- <vue-good-table
        :columns="columns"
        :rows="rows"
        :pagination-options="{
          enabled: true,
          mode: 'pages',
          perPage: 3,
          position: 'top',
          perPageDropdown: [5, 7, 9],
          dropdownAllowAll: true,
          setCurrentPage: 2,
          nextLabel: '次',
          prevLabel: '前',
          rowsPerPageLabel: '表示する行数',
          ofLabel: '/',
          pageLabel: '現在のページ', // for 'pages' mode
          allLabel: '全て',
        }"
      /> -->

      <!-- グループ -->
      <!-- <vue-good-table
        :columns="columns"
        :rows="groupRows"
        :group-options="{ enabled: true }"
      /> -->

    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          label: 'id',
          field: 'id',
          type: 'number',
        },
        {
          label: 'Name',
        　field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM Do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, createdAt: '2011-10-31',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
      rowsNone: [],
      groupRows: [
        {
          mode: "span",
          label: "Mammal",
          html: false,
          children: [
            { id:1, name:"John", age: 20, createdAt: '2010-10-31',score: 0.03343 },
            { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
          ]
        },
        {
          mode: "span",
          label: "Reptiles",
          html: false,
          children: [
            { id:1, name:"John", age: 20, createdAt: '2010-10-31',score: 0.03343 },
            { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
          ]
        },
      ],
    }
  },
  methods: {
    rowStyleClassFn(row) {
      return row.age > 20 ? 'table__row--green' : '';
    },
    searchFn(row, col, cellValue, searchTerm) {
      console.log(`row: ${row}`);
      console.log(`col: ${col}`);
      console.log(`cellValue: ${cellValue}`);
      console.log(`searchTerm: ${searchTerm}`);
      return cellValue === searchTerm;
      // そのままだと数字の入力は文字列として扱われた
      // return cellValue == searchTerm;
      // return cellValue === Number(searchTerm);
    },
  },
}
</script>

<style>
.table__row--green {
  background-color: #00ff00;
}
</style>
