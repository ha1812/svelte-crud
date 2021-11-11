<script>
    import Button from '../components/Button.svelte'
    import Input from '../components/Input.svelte'
    import A from '../components/A.svelte'
    import {userbaseStore, userStore, promiseStore} from '../stores'

    let username, password, email

    function signup() {
        $promiseStore = $userbaseStore.signUp({username, password, email})
            .then((user) => $userStore = user)
    }
</script>

<section class="flex flex-col md:flex-row h-screen items-center">

    <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img src="https://source.unsplash.com/random" alt="" class="w-full h-full object-cover">
    </div>
  
    <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">
  
      <div class="w-full h-100">
  
  
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
  
        <form class="mt-6" on:submit|preventDefault={signup}>
        <div class="flex justify-between">
        </div>
        <Input label="Username" bind:value={username} type="text" required />
        <Input label="Password" bind:value={password} type="password" required />
        <Input label="Email" bind:value={email} type="email" required />
  
          <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6" on:click="{signup}">Sign Up</button>
        </form>
  
        <hr class="my-6 border-gray-300 w-full">
  
  
      </div>
    </div>
  
  </section>