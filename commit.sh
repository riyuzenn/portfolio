#!/bin/bash

run_format() {
    npm run format
}
commit() {
    git commit -m "$commit"
    git push origin master
}
confirm() {
    while true
    do
        read -r -p "Are you sure you want to commit & push? [Y/n] " input
    
        case $input in
                [yY][eE][sS]|[yY])
                    # echo "Yes"
                    commit
                    break
                    ;;
                [nN][oO]|[nN])
                    # echo "No"
                    break
                    ;;
                *)
                    # echo "Invalid input..."
                    ;;
        esac      
    done
}
main() {
    local args1="$1";
    run_format
    git add .
    echo
    read -r -p "Enter commit message: " commit
    echo "Commit message: $commit"
    
    if [[ "$args1" == "--no-confirm" ]]; then
        commit
    else
        confirm
    fi
    
}
main "$1"