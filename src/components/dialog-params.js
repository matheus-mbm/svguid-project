export default {
    template: `
    <div v-model="dialog" full-width>
        <div>
            <div>
                <div>
                    <iconify-icon icon="mdi:key" class="text-3xl"></iconify-icon>
                </div>
                <div>
                    Hash and Key parameters
                </div>
                <div flat round dense icon="close" v-close-popup />
            </div>
            <div>
                <div class="border rounded p-2 shadow bg-white p-4">
                    <div v-if="key">
                        <div class="flex items-center gap-2 my-2 p-1">
                            <div class="font-semibold">
                                ID:
                            </div>
                            <div class="border px-1 text-lg">
                                {{ key.id }}
                            </div>
                        </div>
                        <div class="border rounded my-1 flex items-center gap-2 bg-gray-200">
                            <div class="bg-gray-100 px-1 text-black rounded font-semibold py-1">key</div>
                            <div class="py-1 font-bold text-base">{{ key.hash }}</div>
                        </div>
                        <div class="grid grid-cols-4 gap-3 p-2">
                            <div v-for="(elem, idx) in key.params" class="border rounded px-1">
                                <div class="flex items-center gap-1">
                                    <div class="bg-teal-600 px-1 text-white text-xs">
                                        {{ idx < 10 ? "0" + idx : idx }} </div>
                                            <div class="text-[7pt] bg-gray-300 p-0.5 rounded">HEX</div>
                                            <div>{{ elem.hex }}</div>
                                            <div class="text-[7pt] bg-gray-600 text-white p-0.5 rounded">DEC</div>
                                            <div>{{ elem.dec }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            dialog: false,
            key: null
        }
    },
    mounted() {

    },
    methods: {

        show(key) {
            this.key = key
            this.dialog = true
        }
    },
}