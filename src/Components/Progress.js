

export default function Progress ({progress,className}){
    return  <div className={`w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ${className}`}>
  <div class="bg-green-400 h-2.5 rounded-full" style={{width: progress+"%"}}></div>
</div>
}