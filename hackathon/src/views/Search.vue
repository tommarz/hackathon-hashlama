    <template>
  <div class="search">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <SearchResults msg="Search Results" /> -->
    <!-- Search Bar -->
    <form class="searchbar">
      <div class="searchbar-input">
        <input type="search" placeholder="Search" />
        <a href="#" class="searchbar-clear"></a>
      </div>
      <a href="#" class="searchbar-cancel">Cancel</a>
    </form>

    <!-- Search Bar overlay-->
    <div class="searchbar-overlay"></div>

    <!-- Page content -->
    <div class="page-content">
      <div class="content-block searchbar-not-found">Nothing found</div>

      <div class="list-block list-block-search searchbar-found">
        <ul>
          ... list view items ...
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      items: (function () {
        var it = [];
        for (var i = 0; i < 100; i++) it.push(i + 1);
        return it;
      })(),
    };
  },
  methods: {
    onSearch: function (query, found) {
      console.log(found);
      console.log("search", query);
    },
    onClear: function (event) {
      console.log(event);
      console.log("clear");
    },
    onEnable: function (event) {
      console.log(event);
      console.log("enable");
    },
    onDisable: function (event) {
			console.log(event)
      console.log("disable");
    },
  },
};
</script>