# 优化方案与注意事项
- useEffect要添加依赖数组，避免每次组件更新都要重新执行useEffect
- 复杂的计算或函数使用useMemo或useCallback包裹，并根据情况添加依赖数组，同上避免不必要的更新浪费性能
- 遍历数据时React会要求为每一个数据值添加Key,而Key必须时独一无二的，在选取Key值时尽量不要用索引号，因为如果当数据的添加方式不是顺序添加，而是以其他方式（逆序，随机等），会导致每一次添加数据，每一个数据值的索引号都不一样，这就导致了Key的变化，而当Key变化时，React就会认为这与之前的数据值不相同，会多次执行渲染，会造成大量的性能浪费。所以只在万不得已时，才将数据的索引号当做Key
- 尽量的减少组件的创建和销毁，这样对于性能还是有一定的损耗的，可以将组件隐藏掉，比如加hidden属性，控制css的display、opacity、visibility等等隐式隐藏的方法
- 
 