/*
 * This class contains mock generator code for users, identities
 * and all depended entities.
 */
export class FilterMockGenerator {
  getFilters() {
    return [
      {
        attributes: {
          description: "Filter by assignee",
          key: "assignee",
          query: "filter[assignee]={id}",
          title: "Assignee",
          type: "users"
        },
        type: "filters"
      },
      {
        attributes: {
          description: "Filter by creator",
          key: "creator",
          query: "filter[creator]={id}",
          title: "Creator",
          type: "users"
        },
        type: "filters"
      },
      {
        attributes: {
          description: "Filter by area",
          key: "area",
          query: "filter[area]={id}",
          title: "Area",
          type: "areas"
        },
        type: "filters"
      },
      {
        attributes: {
          description: "Filter by iteration",
          key: "iteration",
          query: "filter[iteration]={id}",
          title: "Iteration",
          type: "iterations"
        },
        type: "filters"
      },
      {
        attributes: {
          description: "Filter by workitemtype",
          key: "workitemtype",
          query: "filter[workitemtype]={id}",
          title: "Workitem type",
          type: "workitemtypes"
        },
        type: "filters"
      },
      {
        attributes: {
          description: "Filter by state",
          key: "state",
          query: "filter[state]={id}",
          title: "State",
          type: "state"
        },
        type: "filters"
      },
      {
        attributes: {
          description: "Filter by label",
          key: "label",
          query: "filter[label]={id}",
          title: "Label",
          type: "labels"
        },
        type: "filters"
      },
      {
        attributes: {
          description: "Filter by title",
          key: "title",
          query: "filter[title]={id}",
          title: "title",
          type: "title"
        },
        type: "filters"
      }
    ];
  }
}
