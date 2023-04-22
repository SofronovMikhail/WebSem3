let celcius = Number.parseInt(prompt("Сколько сейчас градусов цельсии:"));
function faringeit(C)
{
    let F =Number(9/5 * C + 32).toFixed(1);
    return F;
}
alert(`Цельсий: ${celcius}, Фаренгейт: ${faringeit(celcius)}`)
