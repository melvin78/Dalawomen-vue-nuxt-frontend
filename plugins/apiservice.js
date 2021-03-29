import repository from "@/api/repository";
export default (ctx, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)
  const repositoryWithAxios = repository(ctx.$axios)

  const repositories = {
    loans: repositoryWithAxios('api/loans'),
    meetings: repositoryWithAxios('api/meetings'),
    absentees: repositoryWithAxios('/api/absentees'),
    members:repositoryWithAxios('api/members'),
    approval:repositoryWithAxios('api/approve_loans'),
    confirmApproval:repositoryWithAxios('api/confirm_loans'),
    notifications:repositoryWithAxios('api/notifications'),
    markasread:repositoryWithAxios('api/markread'),
    hostThismonth:repositoryWithAxios('api/host'),
    dashboard:repositoryWithAxios('api/balances'),
    memberStatus:repositoryWithAxios('api/memberstat'),
    sendChat:repositoryWithAxios('api/send-messages'),
    getChat:repositoryWithAxios('api/fetch-messages')
  }
  inject('postRepository', repositories)

  // You can reuse the repositoryWithAxios object:
  // inject("userRepository", repositoryWithAxios('/users'));
}
