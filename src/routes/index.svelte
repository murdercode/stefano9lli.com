<div class="">
    <div class="py-4 font-bold text-yellow-100 italic">

        <p>
            class <span class="bold-1">Dev</span> <span class="bold-2">extends</span> 
            <span class="bold-1">Humans</span> &#123;
        </p>
        <p class="row-1">
            use <span class="bold-1">FullStack, WebDev</span>;
        </p>
        <p class="row-1">
            private <span class="bold-2">$info</span> = [
        </p>
        <p class="row-2 bold-3">
            'Stefano Novelli',
        </p>
        <p class="row-2 bold-3">
            '<a class="hover:underline hover:text-indigo-200 active:text-indigo-200" href="mailto:stefano.novelli@pm.me">stefano.novelli@pm.me</a>',
        </p>
        <p class="row-1">
            ];
        </p>
        <p class="row-1">
            protected <span class="bold-2">$hidden</span> = [<span class="bold-3">'hacking'</span>];
        </p>
        <p>
        &#125; <span class='comments'>// 99% dev - 1% arrosticini</span>
        </p>

</div>
</div>

<style windi:safelist>
    .row-0 {
        @apply pl-0;
    }
    .row-1 {
        @apply pl-4;
    }
    .row-2 {
        @apply pl-8;
    }
    .bold-1 {
        @apply text-orange-500 not-italic;
    }
    .bold-2 {
        @apply text-yellow-200 not-italic;
    }
    .bold-3 {
        @apply text-indigo-300 not-italic;
    }
    .comments {
        @apply text-warm-gray-500 font-medium;
    }
</style>