<script>
import TableProduct from '../components/TableProduct.vue'
export default {
  components: { TableProduct },
    
}
</script>

<template>
         <div>
            <div class="text-center mb-12 mt-11">
                <p 
                    class="px-8 py-3 text-3xl font-bold text-gray-900 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
                >
                    Product List
                </p>
            </div>

                <table class="w-[150vh] mx-auto divide-y-2 divide-gray-200 text-sm">
                    <thead>
                        <tr>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Product Name
                            </th>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Description
                            </th>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Price
                            </th>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Image
                            </th>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Created By
                            </th>
                            <th
                                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Category
                            </th>
                            <th class="px-4 py-2">Actions</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200">
                            <TableProduct/>
                    </tbody>
                </table>
        </div>

</template>